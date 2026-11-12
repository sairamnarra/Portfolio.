import { useEffect, useRef, useState, useCallback } from 'react';
import {
  X,
  ExternalLink,
  Download,
  ShieldCheck,
  Calendar,
  Building2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RotateCw,
  AlertCircle,
} from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import type { Certificate } from '../types/index.ts';
import OrganizationLogo from './OrganizationLogo.tsx';

// Configure PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [rotation, setRotation] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [renderError, setRenderError] = useState<string | null>(null);

  // Close on Escape key and prevent background body scrolling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (certificate) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [certificate, onClose]);

  // Determine if we have a fast instant preview image available
  const previewImage = certificate?.previewImageUrl || (certificate?.pdfUrl.match(/\.(jpg|jpeg|png|webp|gif)$/i) ? certificate.pdfUrl : null);
  const isDirectImage = Boolean(certificate?.pdfUrl.match(/\.(jpg|jpeg|png|webp|gif)$/i));

  // Reset zoom & rotation whenever certificate changes
  useEffect(() => {
    setScale(1.0);
    setRotation(0);
    setCurrentPage(1);
    setRenderError(null);
  }, [certificate]);

  // If no instant preview image exists, load via PDF.js as fallback
  useEffect(() => {
    if (!certificate || previewImage) {
      setPdfDoc(null);
      setIsLoading(false);
      return;
    }

    let isCancelled = false;
    setIsLoading(true);
    setRenderError(null);

    const loadingTask = pdfjsLib.getDocument({
      url: certificate.pdfUrl,
    });

    loadingTask.promise
      .then((loadedDoc) => {
        if (!isCancelled) {
          setPdfDoc(loadedDoc);
          setNumPages(loadedDoc.numPages);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          console.error('Failed to load PDF document:', err);
          setRenderError('Could not load inline PDF preview.');
          setIsLoading(false);
        }
      });

    return () => {
      isCancelled = true;
      try {
        loadingTask.destroy();
      } catch {
        // ignore cancellation
      }
    };
  }, [certificate, previewImage]);

  // Render the current page to the canvas if using PDF fallback
  const renderCurrentPage = useCallback(async () => {
    if (!pdfDoc || !canvasRef.current || previewImage) return;

    try {
      const page = await pdfDoc.getPage(currentPage);
      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext('2d');
      if (!context) return;

      const defaultRotation = page.rotate || 0;
      const totalRotation = (defaultRotation + rotation) % 360;
      const viewport = page.getViewport({ scale: scale * 1.2, rotation: totalRotation });
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(viewport.width * pixelRatio);
      canvas.height = Math.floor(viewport.height * pixelRatio);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const renderContext = {
        canvasContext: context,
        viewport,
        canvas,
      };

      await page.render(renderContext).promise;
    } catch (err: unknown) {
      if (err instanceof Error && err.name !== 'RenderingCancelledException') {
        console.error('Error rendering page:', err);
      }
    }
  }, [pdfDoc, currentPage, scale, rotation, previewImage]);

  useEffect(() => {
    renderCurrentPage();
  }, [renderCurrentPage]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-certificate-title"
    >
      {/* Backdrop with elegant blur */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card with smooth entrance */}
      <div className="relative w-full max-w-5xl max-h-[94vh] bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/95 dark:bg-zinc-900/95 shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-zinc-700 dark:text-zinc-300">
              Verified Credential
            </span>
          </div>

          {/* Action & Controls Bar */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Direct Open Button */}
            <a
              href={certificate.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-all duration-150 active:scale-95"
              title="Open authentic document in new browser tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isDirectImage ? 'Open Full Resolution' : 'Open Full PDF'}</span>
              <span className="sm:hidden">Open</span>
            </a>

            {/* Direct Download Button */}
            <a
              href={certificate.pdfUrl}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-150 active:scale-95 shadow-xs"
              title="Download credential to your device"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-lg hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-all duration-150 active:scale-95 ml-1"
              aria-label="Close credential viewer"
              type="button"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {/* Metadata Section */}
          <div>
            <h3
              id="modal-certificate-title"
              className="text-lg sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 font-display mb-2"
            >
              {certificate.title}
            </h3>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
                <OrganizationLogo organization={certificate.issuer} />
                {certificate.issuer}
              </span>
              <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-zinc-400 shrink-0" />
                {certificate.date}
              </span>
              {certificate.credentialId && (
                <>
                  <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700">·</span>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 truncate max-w-xs">
                    ID: {certificate.credentialId}
                  </span>
                </>
              )}
            </div>

            <p className="mt-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {certificate.description}
            </p>
          </div>

          {/* Secure Browser-Compatible Document Viewer */}
          <div className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 flex flex-col">
            {/* Viewer Toolbar */}
            <div className="flex items-center justify-between px-3 py-2 bg-zinc-200/60 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300">
              {/* Pagination Controls (for multi-page PDFs) */}
              <div className="flex items-center gap-1">
                {pdfDoc && numPages > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage <= 1 || isLoading}
                      className="p-1 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      aria-label="Previous Page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="px-2 font-mono text-[11px] tabular-nums">
                      Page {currentPage} of {numPages}
                    </span>
                    <button
                      type="button"
                      onClick={() => setCurrentPage((p) => Math.min(numPages, p + 1))}
                      disabled={currentPage >= numPages || isLoading}
                      className="p-1 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      aria-label="Next Page"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <span className="px-2 font-medium text-[11px] text-zinc-500">
                    Verified Document View
                  </span>
                )}
              </div>

              {/* Interactive Zoom & Rotate Controls */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setScale((s) => Math.max(0.6, s - 0.2))}
                  className="p-1 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-colors"
                  title="Zoom Out"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="px-1 text-[11px] font-mono tabular-nums min-w-[36px] text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setScale((s) => Math.min(2.5, s + 0.2))}
                  className="p-1 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-colors"
                  title="Zoom In"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => { setScale(1.0); setRotation(0); }}
                  className="p-1 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-colors ml-1"
                  title="Reset View"
                  aria-label="Reset View"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setRotation((r) => (r + 90) % 360)}
                  className="p-1 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-800 transition-colors ml-1"
                  title="Rotate 90° clockwise"
                  aria-label="Rotate 90 degrees"
                >
                  <RotateCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Document Presentation Area */}
            <div
              ref={containerRef}
              className="w-full min-h-[380px] max-h-[60vh] overflow-auto flex items-center justify-center p-4 bg-zinc-200/40 dark:bg-zinc-950 transition-colors"
            >
              {isLoading && (
                <div className="flex flex-col items-center justify-center py-12 text-zinc-500">
                  <span className="w-8 h-8 border-2 border-zinc-400 border-t-zinc-800 dark:border-t-zinc-200 rounded-full animate-spin mb-3" />
                  <p className="text-xs font-medium">Opening verified credential...</p>
                </div>
              )}

              {renderError && (
                <div className="flex flex-col items-center justify-center py-10 px-4 text-center max-w-md">
                  <AlertCircle className="w-8 h-8 text-amber-500 mb-2" />
                  <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    Document Ready for Direct Viewing
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 mb-4">
                    Click below to open the authentic certificate in your browser's viewer.
                  </p>
                  <a
                    href={certificate.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open Certificate in New Tab
                  </a>
                </div>
              )}

              {previewImage ? (
                <div className="flex items-center justify-center p-2 w-full h-full overflow-hidden">
                  <img
                    src={previewImage}
                    alt={certificate.title}
                    loading="eager"
                    decoding="async"
                    className="max-w-full rounded-sm shadow-md transition-transform duration-200 ease-out object-contain select-none"
                    style={{
                      transform: `scale(${scale}) rotate(${rotation}deg)`,
                      maxHeight: '56vh',
                    }}
                  />
                </div>
              ) : (
                <canvas
                  ref={canvasRef}
                  className={`max-w-full shadow-md rounded-xs bg-white transition-opacity duration-200 ${
                    isLoading || renderError ? 'hidden' : 'block'
                  }`}
                />
              )}
            </div>
          </div>

          {/* Competencies Footer */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Verified Competencies:
            </span>
            {certificate.skills.map((skill, idx) => (
              <span key={idx} className="text-xs text-zinc-600 dark:text-zinc-400">
                {skill}{idx < certificate.skills.length - 1 ? ' ·' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
