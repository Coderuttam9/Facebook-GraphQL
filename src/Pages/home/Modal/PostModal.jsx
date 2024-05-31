import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../../graphql/mutation";
import { GET_ALL_POST } from "../../../graphql/query";
const PostModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // get value forn input
  const [input, setInput] = useState({
    description: "",
    image: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // post create Mutation
  const [createPostMutation, { postError, postLoading, PostData }] =
    useMutation(CREATE_POST, { refetchQueries: ["GET_ALL_POST"] });

  const handlePostCreate = () => {
    createPostMutation({
      variables: {
        ...input,
      },
    });
  };
  return (
    <>
      <div variant="primary" onClick={handleShow} className="create-post-input">
        What's on your mind, Uttam?
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <h5>Create post</h5>
          <Modal.Title className="text-center"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="main-post-area d-flex">
            <div className="post-logo">
              <img
                src="https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-1/440156078_3681783075433541_8767028999410823915_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=u08bKYnRE84Ab56k_WO&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfAB3U61XyxCHQPOF3u9ao4VUBjYzPGGG6duCGsXvLuKmw&oe=6630F0EB"
                alt=""
              />
            </div>
            <div className="post-right">
              {" "}
              <div className="name">Uttam Roy</div>
              <div className="text-icon d-flex ">
                <div className="icon-1">
                  {" "}
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/qop9rFQ_Ys1.png"
                    alt=""
                  />
                </div>
                <div className="post-method">Public</div>{" "}
                <div className="icon-2"></div>
              </div>
            </div>
          </div>
          <div className="text-area">
            <div className="text-content ">
              <textarea
                className="text"
                name="description"
                value={input.name}
                onChange={handleInputChange}
              ></textarea>
              <p className="place-text">What's on your mind, Uttam?</p>
            </div>
            <div className="icon-area d-flex justify-content-between">
              <div className="bottom-icon-1">
                {" "}
                <img
                  src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                  alt=""
                />
              </div>
              <div className="bottom-icon-2"></div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
          <div className="footer-content d-flex">
            <div className="post-input">
              {" "}
              <input
                type="text"
                name="image"
                value={input.image}
                onChange={handleInputChange}
                placeholder="add your post"
              />
            </div>
            <div className="post-modul">
              <ul className="d-flex">
                <li>
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"
                    alt=""
                  />
                </li>
                <li>
                  {" "}
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className="dot-icon d-block"></div>
          </div>

          <button
            onClick={handlePostCreate}
            className="btn btn-primary d-block"
          >
            Next
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PostModal;
