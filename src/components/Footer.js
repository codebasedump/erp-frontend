import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-auto shadow-sm">
      <small className="text-muted">© {new Date().getFullYear()} Hoffstee Digital. All rights reserved.</small>
    </footer>
  );
}

export default Footer;