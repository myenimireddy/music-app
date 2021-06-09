const Tiles = (props) => {

    return (
      props.data && props.data.map((recommendation) => {
          const mystyle = {
            backgroundColor: recommendation.image,
            width: "200px",
            height: "200px"
          };
          return (
          <div key={recommendation.id}  className="recommendations-tile">
            <div style={mystyle}></div>
            <p className="text-content">{recommendation.album.name}</p>
            <p className="text-content">{recommendation.album.director}</p>
            {props.hideButton ? null :<button className="button-content" onClick={() => props.setPlaylistData(recommendation)}>{recommendation.playlist ? "Added" : "Add to Playlist"}</button>}
          </div>)
      }) 
    )
}

export default Tiles;