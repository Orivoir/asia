document.addEventListener('DOMContentLoaded' , () => {

    const anchors = 'header nav ul li a'.js() ;

    let active = anchors.filter( anchor => anchor.classList.contains( 'active' ) )[0] || anchors[0] ;

    anchors.map( anchor => {

        anchor.on('click' , e =>  {

            active.classList.remove('active') ;
            
            e.this.classList.add('active') ;

            active = e.this;

            e.this.blur();

            'nav'.js().style.display = 'none';
            setTimeout(() => {
                
                'nav'.js().style.display = 'block';
            }, 250);
        } ) ;

    } ) ;

    window.addEventListener('scroll' , e => {

        const [header , nav] = [ 'header'.js() , 'nav'.js() ]
        
        if( window.scrollY > ( header.offsetHeight / 2 ) ) {
            
            nav.classList.add('bottom');
            
        } else {
            
            nav.classList.remove('bottom');
        }

    } ) ;

} ) ;