import React, { useState } from "react";
import "./home.css";
import PostModal from "./Modal/PostModal";
import { useQuery } from "@apollo/client";
import { GET_ALL_POST } from "../../graphql/query";
const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { loading, error, data } = useQuery(GET_ALL_POST);
  console.log(data);

  return (
    <>
      <div className="home-container">
        <div className="row pt-5">
          <div className="col-md-3">
            <div className="left-sidber">
              <ul>
                <li>
                  <img
                    src="https://media.istockphoto.com/id/1286027465/photo/woman-breathing-fresh-air-in-a-sunny-park.jpg?s=612x612&w=0&k=20&c=VIFardLO3UfnHxvLA5zSYhDW5XZ0Cbwpw5umw0Qye7U="
                    className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                    alt=""
                  />
                  <span>Uttam Roy</span>
                </li>
                <li className="d-flex">
                  {" "}
                  <div className="icon-1"></div>
                  <span> friends</span>
                </li>
                <li className="d-flex">
                  {" "}
                  <div className="icon-2"></div>
                  <span> Memories</span>
                </li>
                <li className="d-flex">
                  {" "}
                  <div className="icon-3"></div>
                  <span> Saved</span>
                </li>
                <li className="d-flex">
                  {" "}
                  <div className="icon-4"></div>
                  <span> Groups</span>
                </li>
                <li className="d-flex">
                  {" "}
                  <div className="icon-5"></div>
                  <span> Video</span>
                </li>
                <li className="d-flex">
                  {" "}
                  <div className="icon-6">
                    {" "}
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/ATlxuj_J5ty.png"
                      alt=""
                    />
                  </div>
                  <span> Ads Manager</span>
                </li>
                <li className="d-flex">
                  {" "}
                  <div className="icon-7">
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/Jr0q8qKF2-Y.png"
                      alt=""
                    />
                  </div>
                  <span> Climate Science Center</span>
                </li>
                <li className="d-flex">
                  {" "}
                  <div className="icon-8">
                    <svg
                      viewBox="0 0 16 16"
                      width="20"
                      height="20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="see-more-icon"
                    >
                      <g fill-rule="evenodd" transform="translate(-448 -544)">
                        <path
                          fill-rule="nonzero"
                          d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <span>See more</span>
                </li>
                <li className="d-flex">
                  {" "}
                  <div className="icon-9"></div>
                  <span> Events</span>
                </li>
                <li className="d-flex">
                  {" "}
                  <div className="icon-10"></div>
                  <span> friends</span>
                </li>
                <li className="d-flex">
                  {" "}
                  <div className="icon-11"></div>
                  <span> friends</span>
                </li>
                <li className="d-flex">
                  {" "}
                  <div className="icon-12"></div>
                  <span> friends</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="main-content d-flex justify-content-center">
              <ul className="d-flex">
                <li>
                  {" "}
                  <div className="middle-content">
                    {" "}
                    <div className="top-image">
                      {" "}
                      <img
                        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                        alt=""
                      />
                    </div>
                    <div className="buttom-image">
                      <span>Create story</span>
                    </div>
                    <div className="button-area">
                      <svg
                        viewBox="0 0 20 20"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        <g fill-rule="evenodd" transform="translate(-446 -350)">
                          <g fill-rule="nonzero" className="pluse-icon">
                            <path
                              d="M95 201.5h13a1 1 0 1 0 0-2H95a1 1 0 1 0 0 2z"
                              transform="translate(354.5 159.5)"
                            ></path>
                            <path
                              d="M102.5 207v-13a1 1 0 1 0-2 0v13a1 1 0 1 0 2 0z"
                              transform="translate(354.5 159.5)"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </li>{" "}
                <li>
                  {" "}
                  <div className="middle-content-story">
                    <div className="story-img">
                      <img
                        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                        alt=""
                      />
                      <div className="story-logo">
                        <img
                          src="https://media.istockphoto.com/id/1496615469/photo/serene-latin-woman-enjoy-sunset-with-gratitude.jpg?s=1024x1024&w=is&k=20&c=Boo17hpiJy-am_I4CSMRALI5tPRtTZKrVp2RHlI4wQw="
                          alt=""
                        />
                      </div>
                      <div className="story-name">
                        <span>Json Roy</span>
                      </div>
                    </div>
                  </div>
                </li>{" "}
                <li>
                  {" "}
                  <div className="middle-content-story">
                    <div className="story-img">
                      <img
                        src="https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-6/440332338_396917446584406_6274412281080813542_n.jpg?stp=dst-jpg_p526x296&_nc_cat=1&_nc_cb=99be929b-713f6db7&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HL60KPYKkf0Ab4gFkBl&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfAdqbjBKCw40t_JfJDdKvC4oYBQdgVxVzN77_DbYOitkQ&oe=66325DD6"
                        alt=""
                      />
                      <div className="story-logo">
                        <img
                          src="https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-1/437961575_394417503501067_6687897200466469810_n.jpg?stp=dst-jpg_p200x200&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=V-uxqyEPnpMAb7pTN1p&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfABfyl4S52DpjgiL5AdNs0r7ylqLJ0blPmHy48gsz_SPg&oe=66324D41"
                          alt=""
                        />
                      </div>
                      <div className="story-name">
                        <span>Json Roy</span>
                      </div>
                    </div>
                  </div>
                </li>{" "}
                <li>
                  {" "}
                  <div className="middle-content-story">
                    <div className="story-img">
                      <img
                        src="https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-6/439683037_856807553126406_3833083226514229451_n.jpg?stp=dst-jpg_s720x720&_nc_cat=1&_nc_cb=99be929b-713f6db7&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a6X0M_AsXEEQ7kNvgGEWKtx&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfC57-yM8gb1OIwD71KGtV4g_kjcoDyN_uxcqFTwzY14xw&oe=66322C64"
                        alt=""
                      />
                      <div className="story-logo">
                        <img
                          src="https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-1/433382581_831028422370986_1325467292693355972_n.jpg?stp=dst-jpg_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LnRrkO3_JTYAb7y5V2m&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfAsiEPurVA7PDohVb-uACDKNs9SN-LSlWuM9yb3pXabow&oe=66323B99"
                          alt=""
                        />
                      </div>
                      <div className="story-name">
                        <span>Json Roy</span>
                      </div>
                    </div>
                  </div>
                </li>{" "}
              </ul>
            </div>
            <div className="create-post-area ">
              <div className="create-post-main-content ">
                <div className="create-post-content d-flex justify-content-center">
                  <div className="create-post-logo">
                    <img
                      src="https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-1/440156078_3681783075433541_8767028999410823915_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=u08bKYnRE84Ab56k_WO&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfAB3U61XyxCHQPOF3u9ao4VUBjYzPGGG6duCGsXvLuKmw&oe=6630F0EB"
                      alt=""
                    />
                  </div>
                  <PostModal className="create-post-input" />
                </div>
                <div className="create-post-divider d-flex justify-content-center ">
                  <div className="main-divider"></div>
                </div>
                <div className="create-post-buttom-area d-flex justify-content-between ">
                  <div className="live-video">
                    {" "}
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png"
                      alt=""
                    />{" "}
                    <span>Live video</span>
                  </div>
                  <div className="video-photo">
                    {" "}
                    <img
                      src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
                      alt=""
                    />{" "}
                    <span> photo/video</span>
                  </div>
                  <div className="filling">
                    {" "}
                    <img
                      src=" https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"
                      alt=""
                    />{" "}
                    <span>filling/activity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="right-sidber"> </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            {data &&
              data.getAllPosts.map((item, index) => (
                <div className="create-post-area ">
                  <div className="create-post-main-content ">
                    <div className=" create-post-content justify-content-between">
                      <div className="post-left d-flex">
                        <div className="create-post-logo">
                          <img
                            src="https://scontent.fjsr1-1.fna.fbcdn.net/v/t39.30808-1/440156078_3681783075433541_8767028999410823915_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=u08bKYnRE84Ab56k_WO&_nc_ht=scontent.fjsr1-1.fna&oh=00_AfAB3U61XyxCHQPOF3u9ao4VUBjYzPGGG6duCGsXvLuKmw&oe=6630F0EB"
                            alt=""
                          />
                        </div>
                        <div className="auth-details">
                          <div className="auth-name">
                            <div className="name">Uttam roy</div>
                            <div className="avriation d-flex ">
                              <div className="time-ago">1h</div>
                              <div className="auth-icon">
                                <svg
                                  viewBox="0 0 16 16"
                                  width="12"
                                  height="12"
                                  fill="currentColor"
                                  title="Shared with Custom"
                                  className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq auth-icon-auth"
                                >
                                  <title>Shared with Custom</title>
                                  <g
                                    fill-rule="evenodd"
                                    transform="translate(-448 -544)"
                                  >
                                    <path d="M459.75 551c-1.24 0-2.25-1.121-2.25-2.5 0-1.542.863-2.5 2.25-2.5s2.25.958 2.25 2.5c0 1.379-1.01 2.5-2.25 2.5m.692 1h-1.384c-.105 0-.21.005-.312.014a.3.3 0 0 0-.186.509 5.03 5.03 0 0 1 1.44 3.53v1.147a.3.3 0 0 0 .3.3h2.015c.929 0 1.685-.756 1.685-1.685v-.257a3.562 3.562 0 0 0-3.558-3.558m-3.032 6.5h-7.82c-.877 0-1.59-.714-1.59-1.59v-.857a4.057 4.057 0 0 1 4.053-4.053h2.894a4.057 4.057 0 0 1 4.053 4.053v.856c0 .877-.713 1.591-1.59 1.591m-3.91-7.5c-1.379 0-2.5-1.346-2.5-3 0-1.879.935-3 2.5-3s2.5 1.121 2.5 3c0 1.654-1.121 3-2.5 3"></path>
                                  </g>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="post-right">
                        <div className="close-btn">
                          <svg
                            viewBox="0 0 20 20"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq"
                          >
                            <g
                              fill-rule="evenodd"
                              transform="translate(-446 -350)"
                            >
                              <path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path>
                            </g>
                          </svg>
                        </div>
                        <div className="dot-area">
                          <div className="three-dot"></div>
                        </div>
                      </div>
                    </div>
                    <div className="post-content">
                      <p>{item.description}</p>
                    </div>
                    <div className="img-content">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="post-button-content d-flex justify-content-between">
                      <div className="like-icon d-flex">
                        <div className="like d-flex">
                          <img
                            src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                            alt=""
                          />
                          <img
                            src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cg clip-path='url(%23clip0_15251_63610)'%3E%3Cpath d='M15.9963 8c0 4.4179-3.5811 7.9993-7.9986 7.9993-4.4176 0-7.9987-3.5814-7.9987-7.9992 0-4.4179 3.5811-7.9992 7.9987-7.9992 4.4175 0 7.9986 3.5813 7.9986 7.9992Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M15.9973 7.9992c0 4.4178-3.5811 7.9992-7.9987 7.9992C3.5811 15.9984 0 12.417 0 7.9992S3.5811 0 7.9986 0c4.4176 0 7.9987 3.5814 7.9987 7.9992Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M7.9996 5.9081c-.3528-.8845-1.1936-1.507-2.1748-1.507-1.4323 0-2.4254 1.328-2.4254 2.6797 0 2.2718 2.3938 4.0094 4.0816 5.1589.3168.2157.7205.2157 1.0373 0 1.6878-1.1495 4.0815-2.8871 4.0815-5.159 0-1.3517-.993-2.6796-2.4254-2.6796-.9811 0-1.822.6225-2.1748 1.507Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 7.9992 -7.99863 0 7.9986 7.9992)'%3E%3Cstop offset='.5637' stop-color='%23E11731' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23E11731' stop-opacity='.1'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3986' y1='2.4007' x2='13.5975' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FF74AE'/%3E%3Cstop offset='.5001' stop-color='%23FA2E3E'/%3E%3Cstop offset='1' stop-color='%23FF5758'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_15251_63610'%3E%3Cpath fill='%23fff' d='M-.001.0009h15.9992v15.9984H-.001z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                            alt=""
                          />
                        </div>
                        <div className="like-name">
                          <span>Uttam Roy and others</span>
                        </div>
                      </div>
                      <div className="comment-share d-flex justify-content-between ">
                        <div className="comment-count">323</div>
                        <div className="comment-icon"></div>
                        <div className="share-count">23</div>
                        <div className="share-icon"></div>
                      </div>
                    </div>
                    <div className="main-divider d-flex justify-content-center">
                      <div className="divider"></div>
                    </div>

                    <div className="like-comment-share-area d-flex justify-content-between">
                      <div className="buttom-like-content d-flex">
                        <div className="button-like-icon"></div>
                        <div className="button-like-text">Like</div>
                      </div>
                      <div className="buttom-comment-content d-flex">
                        <div className="button-comment-icon"></div>
                        <div className="button-comment-text">Comments</div>
                      </div>
                      <div className="buttom-share-content d-flex">
                        <div className="button-share-icon"></div>
                        <div className="button-share-text">Share</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
