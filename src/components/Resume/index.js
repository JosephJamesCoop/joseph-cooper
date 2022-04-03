import ResumePDF from "../../assets/resume/JosephCooperResume.pdf";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const flip = (next) => {
    setPageNumber((prevPageNumber) => prevPageNumber + next);
  };

  const front = () => {
    flip(-1);
  };

  const back = () => {
    flip(1);
  };

  return (
    <>
      <section>
        <a href={ResumePDF} download>
          Click to download
        </a>
      </section>
      <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

      <div>
        <button type="button" disabled={pageNumber <= 1} onClick={front}>
          Front
        </button>
        <button type="button" disabled={pageNumber >= numPages} onClick={back}>
          Back
        </button>
      </div>
    </>
  );
}

export default Resume;
