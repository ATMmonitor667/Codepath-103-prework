import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import supabase from '../client';
import './EditCreator.css';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from('Creater')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;

        if (data) {
          setFormData({
            name: data.name || '',
            url: data.url || '',
            description: data.description || '',
            imageURL: data.imageURL || ''
          });
        }
      } catch (error) {
        console.error('Error fetching creator:', error);
        alert('Error loading creator data');
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id, navigate]);

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

    setSaving(true);

    try {
      const { error } = await supabase
        .from('Creater')
        .update(formData)
        .eq('id', id);

      if (error) throw error;

      navigate(`/creator/${id}`);
    } catch (error) {
      console.error('Error updating creator:', error);
      alert('Error updating creator. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this creator? This action cannot be undone.')) {
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
        <div className="loading">Loading creator data...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="form-container">
        <header className="form-header">
          <h1>Edit Creator</h1>
          <p>Update the information for this content creator</p>
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
            <Link to={`/creator/${id}`} className="btn btn-secondary">
              Cancel
            </Link>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={saving}
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="btn btn-danger"
            >
              Delete Creator
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCreator;
