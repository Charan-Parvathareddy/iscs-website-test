import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

const PDFModal: React.FC<PDFModalProps> = ({ isOpen, onClose, pdfUrl }) => {
  // Add zoom parameter to the URL
  const pdfUrlWithZoom = `${pdfUrl}#zoom=25`;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0">
        <iframe
          src={pdfUrlWithZoom}
          className="w-full h-full"
          title="PDF Viewer"
        />
      </DialogContent>
    </Dialog>
  );
};

export default PDFModal;