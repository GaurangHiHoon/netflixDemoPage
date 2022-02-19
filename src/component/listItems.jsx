import "./listitem.scss"

const Listitem = () => {
    return ( <div className="listItem">
     <video autoPlay="true" muted playsInline loop>
         <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
     </video>
    </div> );
}
 
export default Listitem;