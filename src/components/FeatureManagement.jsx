import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThumbsUp , Send,MessageCircle,Pencil, PenBoxIcon,UserPlus    } from "lucide-react";
import "../components/FeatureManagement.css";

const FeatureManagement = () => {
  const { username } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchFeatures();
  }, []);

  const fetchFeatures = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getall");
      setFeatures(response.data);
      console.log(features);
    } catch (err) {
      setError("Failed to load features. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddFeature = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/addfeature",
        { title, description },
        { headers: { Username: username } }
      );
      setFeatures([...features, response.data]);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleVote = async (featureId) => {
    try {
      const response = await axios.post(`http://localhost:8080/${featureId}/vote`);
      setFeatures(features.map((f) => (f.id === featureId ? response.data : f)));
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddComment = async (featureId) => {
    try {
      const response = await axios.post(`http://localhost:8080/${featureId}/comments`, {
        text: comment,
        users: username,
      });
      setFeatures(features.map((f) => (f.id === featureId ? response.data : f)));
      setComment("");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="text-center mt-4"><div className="spinner-border" role="status"></div></div>;
  if (error) return <div className="alert alert-danger text-center mt-4" role="alert">{error}</div>;

  return (
    <div className="w-full py-4 px-6 bg-gray-100">
   
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Feature recommendations page</a>
    <a class="navbar-brand" href="/login">Logout</a>
  </div>
</nav>
      {/* Add Feature Form */}
      <form onSubmit={handleAddFeature} className="mb-4">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title h3 mb-4">Add New Feature</h1>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="form-control"
                rows="3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Add Feature
            </button>
          </div>
        </div>
      </form>

      {/* Features List */}
      {Array.isArray(features) && features.map((feature) => (
        <div key={feature.id} className="card mb-4">
          <div className="card-body">
          <div className="username">
            <div> <UserPlus/> :</div>
            <div> {feature.createdBy.username}</div>
         
             </div>
              <div className="feature-title"> 
      <h3>{feature.title}</h3> 
    </div>
            <p className="card-text">{feature.description}</p>

            {/* Voting Section */}
            <button
              onClick={() => handleVote(feature.id)}
              className="btn btn-success d-inline-flex align-items-center gap-2 mb-4"
            >
              <ThumbsUp size={18} /> {feature.votes} votes
            </button>

            {/* Comment Section */}
            <div className="mt-4">
              <div className="mb-3">
                <textarea
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="form-control mb-2"
                  rows="2"
                ></textarea>
                <button
                  onClick={() => handleAddComment(feature.id)}
                  className="btn btn-secondary"
                >
                 <Send size={18} />Add Comment
                </button>
              </div>

              {/* Display Comments */}
              <div className="mt-4">
                <h3 className="h6 mb-3">Comments:</h3>
                {Array.isArray(feature.comments) && feature.comments.length > 0 ? (
                  <div className="list-group">
                    {feature.comments.map((comment) => (
                      <div key={comment.id} className="list-group-item">
                        <div className="comment">
                          <div className="username1"><PenBoxIcon/> : {comment.users}</div>
                          <div><MessageCircle /> : {comment.text}</div>
                        
                        </div>
                      
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted">No comments yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureManagement;