import ResumePDF from "../../../assets/resume/Joseph-Cooper-Resume.pdf";

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
        <h2 className="top download">
        <a href={ResumePDF} download>
          Click to download
          <p className='mobile'>*Looks like you're using a smaller screen. Why don't you click above to download for abetter user experience!</p>
        </a>
        </h2>
      </section>
      <div className='pdf'>
      <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      </div>
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
