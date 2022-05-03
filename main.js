function resize() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');


    header.style.width = screen.availWidth + 'px';

    main.style.width = screen.availWidth + 'px';

    footer.style.width = screen.availWidth + 'px';
}