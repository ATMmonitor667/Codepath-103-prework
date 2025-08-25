import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ creator }) => {
  return (
    <div className="card">
      <div className="card-header">
        {creator.imageURL && (
          <img 
            src={creator.imageURL} 
            alt={creator.name}
            className="creator-image"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}
        <div className="creator-info">
          <h3>{creator.name}</h3>
          <a 
            href={creator.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="creator-url"
          >
            Visit Channel →
          </a>
        </div>
      </div>
      
      <div className="card-body">
        <p className="creator-description">{creator.description}</p>
      </div>
      
      <div className="card-footer">
        <Link to={`/creator/${creator.id}`} className="btn btn-view">
          View Details
        </Link>
        <Link to={`/edit/${creator.id}`} className="btn btn-edit">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default Card;
