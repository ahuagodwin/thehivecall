import { useEffect } from 'react';

export const useDisableContextMenu = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      const modifier = event.ctrlKey || event.metaKey;

      // F12
      if (event.key === 'F12') {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      // Ctrl/Cmd + Shift + I
      if (modifier && event.shiftKey && key === 'i') {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      // Ctrl/Cmd + Shift + J
      if (modifier && event.shiftKey && key === 'j') {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      // Ctrl/Cmd + Shift + C
      if (modifier && event.shiftKey && key === 'c') {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      // Ctrl/Cmd + U
      if (modifier && key === 'u') {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      // Ctrl/Cmd + S
      if (modifier && key === 's') {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    };

    // Disable copy
    const handleCopy = (event: ClipboardEvent) => {
      event.preventDefault();
    };

    // Disable cut
    const handleCut = (event: ClipboardEvent) => {
      event.preventDefault();
    };

    // Disable paste
    const handlePaste = (event: ClipboardEvent) => {
      event.preventDefault();
    };

    // Disable text selection
    const handleSelectStart = (event: Event) => {
      event.preventDefault();
    };

    // Disable drag
    const handleDragStart = (event: DragEvent) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('paste', handlePaste);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('paste', handlePaste);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);
};