document.addEventListener('DOMContentLoaded' , () => {

    '.link-learn-more'.js().map( link => {

        link.on('click' , e => {

            
            '#learn-more'.js().classList.remove('hide');
            const src = e.this.getAttribute('data-open') ;

            if( '#learn-more figure img'.js() ) {

                '#learn-more figure img'.js().src = src;
                return;
            }

            

            const img = new Image() ;

            img.src = src;

            img.addEventListener('load' , () => {

                img.width = '400';

                '#learn-more figure'.js().add( img , 'bottom' ) ;

            } ) ;

        } ) ;

    } ) ;

} ) ;