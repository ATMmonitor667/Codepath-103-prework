import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import supabase from '../client';
import './AddCreator.css';

const AddCreator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.url || !formData.description) {
      alert('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase
        .from('Creater')
        .insert([formData]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      navigate('/');
    } catch (error) {
      console.error('Error adding creator:', error);
      alert(`Error adding creator: ${error.message || 'Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <header className="form-header">
          <h1>Add New Creator</h1>
          <p>Share an amazing content creator with the Creatorverse!</p>
        </header>

        <form onSubmit={handleSubmit} className="creator-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter creator's name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="url">Channel/Profile URL *</label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              placeholder="https://..."
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about this creator and their content..."
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageURL">Image URL (optional)</label>
            <input
              type="url"
              id="imageURL"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
              placeholder="https://... (link to creator's image)"
            />
            {formData.imageURL && (
              <div className="image-preview">
                <img
                  src={formData.imageURL}
                  alt="Preview"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>

          <div className="form-actions">
            <Link to="/" className="btn btn-secondary">
              Cancel
            </Link>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Add Creator'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCreator;
