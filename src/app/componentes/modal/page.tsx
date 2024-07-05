
const BACKGROUND_STYLE={
    position:'fixed',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0,0,0,0.4)',
    zIndex:'1000'
}
const MODAL_STYLE={
    position:'fixed',
    top:'50%',
    left:"50%",
    transform:'translate(-50% ,-50%)',
    padding:'5px',
     backgroundColor:'#ffffff',
     borderRadius:'5px',
    // zIndex:'1000'
}

export default function Modal({isOpen,children}:any){

    if( isOpen){
        return (
            <div style={BACKGROUND_STYLE}>            
                <div style={MODAL_STYLE}>
                  {children}
                </div>
            </div>
            )
    }

    return null;
}