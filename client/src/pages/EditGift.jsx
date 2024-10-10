import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EditGift.css";

const EditGift = () => {
  const {id} = useParams();

  const [gift, setGift] = useState({
    id: 0,
    name: "",
    pricepoint: "",
    audience: "",
    image: "",
    description: "",
    submittedby: "",
    submittedon: "",
  });

  useEffect(() => {
    const fetchGiftById = async () => {
      const response = await fetch(`/gifts/${id}`);
      const data = await response.json();
      console.log('data:',data);
      setGift(data[0]);
    };

    fetchGiftById();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGift((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updateGift =async (event) => {
    event.preventDefault();
     try {
     const response=  await fetch(`/gifts/${id}`,{
              method:'PATCH',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify({...gift})
            });
      if(!response.ok)
        throw new Error('Failed to update the gift'+id);
      else
        window.location = '/'

    } catch (error) {
       console.log('error:',error.message);
    }
  };

  const deleteGift = async (event) => {
    event.preventDefault();
     try {
     const response=  await fetch(`/gifts/${id}`,{
              method:'DELETE',
            });
      if(!response.ok)
        throw new Error('Failed to delete the gift'+id);
      else
        window.location = '/'

    } catch (error) {
       console.log('error:',error.message);
    }
  };

  return (
    <div className="EditGift">
      <form>
        <label>Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          value={gift.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
          value={gift.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <label>Image URL</label>
        <br />
        <input
          type="text"
          id="image"
          name="image"
          value={gift.image}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Price Point</label>
        <br />
        <input
          type="text"
          id="pricepoint"
          name="pricepoint"
          value={gift.pricepoint}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Audience </label>
        <br />
        <input
          type="text"
          id="audience"
          name="audience"
          value={gift.audience}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Submitted By</label>
        <br />
        <input
          type="text"
          id="submittedby"
          name="submittedby"
          value={gift.submittedby}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          className="submitButton"
          type="submit"
          value="Submit"
          onClick={updateGift}
        />
        <button className="deleteButton" onClick={deleteGift}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditGift;
