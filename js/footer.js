document.addEventListener('DOMContentLoaded' , () => {

    document.querySelector('footer i').addEventListener('click' , () => {

        const footer = 'footer'.js() ;

        footer.parentNode.removeChild( footer );

    } ) ;

} ) ;