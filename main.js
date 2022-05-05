function adjust_size() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const mainbox = document.querySelector('#mainbox');
    const menubar = document.querySelector('#menubar');
    const play = document.querySelector('#play');
    const status = document.querySelector('#status');
    const footer = document.querySelector('footer');

    const x_tap_status_height = screen.height - (window.outerHeight - window.innerHeight);

    header.style.width = screen.width + 'px';
    header.style.height = (x_tap_status_height * 0.1) + 'px';
    // main.style.width = screen.width + 'px';
    // main.style.height = (x_tap_status_height * 0.85) + 'px';
    mainbox.style.width = (screen.width * 0.6) + 'px';
    mainbox.style.height = (x_tap_status_height * 0.85) + 'px';
    menubar.style.width = (screen.width * 0.6) + 'px';
    menubar.style.height = (mainbox.offsetHeight * 0.1) + 'px';
    play.style.width = (screen.width * 0.6) + 'px';
    play.style.height = (mainbox.offsetHeight * 0.7) + 'px';
    status.style.width = (screen.width * 0.6) + 'px';
    status.style.height = (mainbox.offsetHeight * 0.2) + 'px';
    footer.style.width = screen.width + 'px';
    footer.style.height = (x_tap_status_height * 0.05) + 'px';


}

// Prevent to scroll when user push arrow key