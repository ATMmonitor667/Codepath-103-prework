import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../client';
import Card from '../components/Card';
import './ShowCreators.css';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data, error } = await supabase
          .from('Creater')
          .select('*');

        if (error) throw error;
        setCreators(data || []);
      } catch (error) {
        console.error('Error fetching creators:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCreators();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading creators...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="header">
        <h1>🌟 Creatorverse</h1>
        <p>Discover amazing content creators worth following!</p>
        <Link to="/new" className="btn btn-primary">
          Add New Creator
        </Link>
      </header>

      <main className="main-content">
        {creators.length === 0 ? (
          <div className="empty-state">
            <h2>No creators yet!</h2>
            <p>Be the first to add a content creator to the Creatorverse.</p>
            <Link to="/new" className="btn btn-primary">
              Add Your First Creator
            </Link>
          </div>
        ) : (
          <div className="creators-grid">
            {creators.map((creator) => (
              <Card key={creator.id} creator={creator} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ShowCreators;
