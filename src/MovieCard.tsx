interface Movie {
    poster: string,
    title: string,
    type: string,
    year: string | number,
    imdbID?: string
}

const IMDB_URL = 'https://www.imdb.com/title';

const MovieCard = (props: Movie) => {
    return (
        <div className="movie">
            <a href={IMDB_URL + '/' + props.imdbID} target="_blank" rel="noreferrer">
            <div>
                <p>{props.year}</p>
            </div>

            <div>
                <img 
                src={props.poster !== 'N/A' ? props.poster : "https://via.placeholder.com/400"}
                alt={props.title}
                />
            </div>

            <div>
                <span>{props.type}</span>
                <h3>{props.title}</h3>
            </div>
            </a>
        </div>
    )
};
export default MovieCard;