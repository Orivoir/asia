document.addEventListener('DOMContentLoaded' , () => {

    let closes = '.close'.js() ;
    
    closes = closes instanceof Node ? [ closes ] : closes ;

    closes.map(close => {

        close.on('click' , e => {

            const parent = e.this.getAttribute('data-close') ;
            parent.js().classList.add('hide') ;

        } ) ;
    } ) ;
    
} ) ;