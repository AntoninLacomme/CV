export default { 
    importHTML (path, fxCallback) {
        let request = new XMLHttpRequest ();
        request.open ("GET", path, true);
        request.send ();
        request.onloadend = () => {
            fxCallback (request.responseText)
        }
    }
}