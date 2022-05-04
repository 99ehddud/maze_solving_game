function adjust_size() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const playbox = document.querySelector('#playbox');
    const footer = document.querySelector('footer');

    const x_tap_status_height = screen.height - (window.outerHeight - window.innerHeight);

    header.style.width = screen.width + 'px';
    header.style.height = (x_tap_status_height * 0.1) + 'px';
    main.style.width = screen.width + 'px';
    main.style.height = (x_tap_status_height * 0.85) + 'px';
    playbox.style.width = (screen.width * 0.6) + 'px';
    playbox.style.height = (x_tap_status_height * 0.85) + 'px';
    footer.style.width = screen.width + 'px';
    footer.style.height = (x_tap_status_height * 0.05) + 'px';
}