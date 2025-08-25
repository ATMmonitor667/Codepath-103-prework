import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import supabase from '../client';
import './ViewCreator.css';

const ViewCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from('Creater')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setCreator(data);
      } catch (error) {
        console.error('Error fetching creator:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this creator?')) {
      try {
        const { error } = await supabase
          .from('Creater')
          .delete()
          .eq('id', id);

        if (error) throw error;
        navigate('/');
      } catch (error) {
        console.error('Error deleting creator:', error);
        alert('Error deleting creator. Please try again.');
      }
    }
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading creator details...</div>
      </div>
    );
  }

  if (!creator) {
    return (
      <div className="container">
        <div className="error">
          <h2>Creator not found</h2>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="creator-detail">
        <div className="creator-header">
          {creator.imageURL && (
            <img
              src={creator.imageURL}
              alt={creator.name}
              className="creator-image-large"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}
          <div className="creator-info">
            <h1>{creator.name}</h1>
            <a
              href={creator.url}
              target="_blank"
              rel="noopener noreferrer"
              className="creator-url-large"
            >
              🔗 Visit Channel
            </a>
          </div>
        </div>

        <div className="creator-description-section">
          <h3>About</h3>
          <p>{creator.description}</p>
        </div>

        <div className="action-buttons">
          <Link to="/" className="btn btn-secondary">
            ← Back to Home
          </Link>
          <Link to={`/edit/${creator.id}`} className="btn btn-primary">
            Edit Creator
          </Link>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete Creator
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCreator;
