import { Button, Container } from "reactstrap";
import { BsSpotify } from "react-icons/bs";
import { MdOutlineHome, MdOutlineSearch } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { BsPlusSquareFill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="vh-100 bg-black text-center ps-3">
        <Container className="d-flex flex-column p-0 ">
          <Container className="p-0 d-flex flex-column justify-content-between vh-100 ">
            <div>
              <div className="ps-2 pt-4 d-flex align-items-center mb-4">
                <BsSpotify size={40} />
                <span className="ms-2 fw-bold fs-3">Spotify</span>
              </div>
              <div>
                <Container className="d-flex flex-column">
                  <Link to="/" className="text-decoration-none text-white">
                    <div className="fw-semibold d-flex align-items-center mb-3 text-secondary sidebar-text">
                      <MdOutlineHome size={24} className="me-3" />
                      Home
                    </div>
                  </Link>
                  <Link to="/search" className="text-decoration-none">
                    <div className="fw-semibold d-flex align-items-center mb-3 text-secondary sidebar-text ">
                      <MdOutlineSearch size={24} className="me-3" />
                      Search
                    </div>
                  </Link>
                  <div className="fw-semibold d-flex align-items-center mb-3 text-secondary sidebar-text">
                    <VscLibrary size={24} className="me-3" />
                    Library
                  </div>
                </Container>
                <Container className="d-flex flex-column mt-3 mb-auto">
                  <div className="fw-semibold d-flex align-items-center mb-3 text-secondary sidebar-text">
                    <BsPlusSquareFill size={24} className="me-3" />
                    Create Playlist
                  </div>
                  <div className="fw-semibold d-flex align-items-center mb-3 text-secondary sidebar-text">
                    <FcLike size={24} className="me-3" />
                    Liked Songs
                  </div>
                </Container>
              </div>
            </div>

            <Container className="">
              {/* <div className="fs-6 text-gray d-flex flex-column align-items-start ">
                <span className="col">
                  Legal Privacy Center <br /> Privacy Policy Cookies
                  <br /> About Ads
                </span> */}
              <div className="fs-6 text-gray d-flex flex-column ">
                <div className="text-start mb-3 text-secondary fs-5">
                  <span className="fs-6 fw-light me-2">Legal </span>
                  <span className="fs-6 fw-light me-2">Privacy Center </span>
                  <br />
                  <span className="fs-6 fw-light me-2">Privacy Policy </span>
                  <span className="fs-6 fw-light me-2">Cookies </span>
                  <br />
                  <span className="fs-6 fw-light me-2">About Ads</span>
                  <br />
                  <span className="fs-6 fw-light me-2">Cookies </span>
                </div>
                <Button
                  className="rounded-5 m-2 border border-white bg-black text-white btn-hover me-2 fw-semibold fs-6"
                  style={{ width: "10rem" }}
                >
                  <BsGlobe size={24} className="me-1" />
                  English
                </Button>
              </div>
            </Container>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default Sidebar;