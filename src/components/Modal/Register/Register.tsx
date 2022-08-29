import React, { useRef, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// @imageUpload
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";

// @styled-component
import {
  Layout,
  Modal,
  CloseButton,
  Title,
  Detail,
  Input,
  Button,
  InviteUser,
  UserName,
} from "./Register.styled";

// @axios
import axios from "axios";

// @Toast
import { toast } from "react-toastify";

// @type

interface ModalProps {
  setShow: () => void;
}

//------------------------------------------------------------------
const RegisterModal: React.FC<ModalProps> = ({ setShow }) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeRef = useRef<HTMLDivElement | null>(null);

  const [image, setImage] = useState<any>("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [invite, setInvite] = useState<any>("");

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    (async () => {
      if (id !== "0") {
        const tempState = await axios.get(
          process.env.REACT_APP_BACKENDURL + `get/${id}`
        );
        setInvite(tempState);
      }
    })();
  }, [id]);

  const changeFirst = (e: any) => {
    setFirst(e.target.value);
  };

  const changeLast = (e: any) => {
    setLast(e.target.value);
  };

  const changeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const getImageFileObject = (imageFile: any) => {
    if (Object.keys(imageFile).length) {
      var reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(imageFile.file);
    }
  };
  const runAfterImageDelete = (file: any) => {
    setImage("");
  };

  const handleClickOutside = (e: any) => {
    if (modalRef.current?.contains(e.target)) {
      return;
    } else {
      if (closeRef.current?.contains(e.target)) {
        return;
      } else {
        setShow();
      }
    }
  };

  const register = async () => {
    if (first === "") {
      toast.error("Please input First Name", {
        position: "top-right",
        theme: "dark",
        hideProgressBar: true,
      });
      setLoading(false);
      return;
    }
    if (last === "") {
      toast.error("Please input Last Name", {
        position: "top-right",
        theme: "dark",
        hideProgressBar: true,
      });

      setLoading(false);
      return;
    }

    if (email === "") {
      toast.error("Please input Email", {
        position: "top-right",
        theme: "dark",
        hideProgressBar: true,
      });

      setLoading(false);
      return;
    }
    setLoading(true);
    if (image === "") {
      toast.error("Please select Image", {
        position: "top-right",
        theme: "dark",
        hideProgressBar: true,
      });

      setLoading(false);
      return;
    }
    if (id === "0") {
      const result = await axios
        .post(process.env.REACT_APP_BACKENDURL + `add`, {
          first: first,
          last: last,
          email: email,
          img: image,
        })
        .then((res) => {
          return res.data;
        });
      setLoading(false);
      if (result.res === "fail") {
        toast.error("This user has already registered.", {
          position: "top-right",
          theme: "dark",
          hideProgressBar: true,
        });
      } else {
        localStorage.setItem("dogdripID", result.res._id);
        toast.success("success", {
          position: "top-right",
          theme: "dark",
          hideProgressBar: true,
        });
        navigate("/dashboard");
      }
    } else {
      const result = await axios
        .post(process.env.REACT_APP_BACKENDURL + `invite`, {
          first: first,
          last: last,
          email: email,
          img: image,
          inviteId: id,
        })
        .then((res) => {
          return res.data;
        });
      if (result.res === "0") {
        toast.error("This user has already registered.", {
          position: "top-right",
          theme: "dark",
          hideProgressBar: true,
        });
      } else {
        console.log(result);
        localStorage.setItem("dogdripID", result.res._id);
        toast.success("success", {
          position: "top-right",
          theme: "dark",
          hideProgressBar: true,
        });
        navigate("/");
      }
    }
  };

  return (
    <Layout>
      <Modal ref={modalRef}>
        <CloseButton
          onClick={() => {
            setShow();
          }}
          ref={closeRef}
        >
          X
        </CloseButton>
        <Title>Register</Title>
        <Detail>Create a new account</Detail>
        {invite !== "" && (
          <InviteUser>
            Invited from{" "}
            <UserName>{invite.data.first + " " + invite.data.last}</UserName>.
          </InviteUser>
        )}
        <ImageUploader
          onFileAdded={(img: any) => {
            getImageFileObject(img);
          }}
          onFileRemoved={(img: any) => {
            runAfterImageDelete(img);
          }}
        />
        <Input placeholder="First name" onChange={changeFirst} />
        <Input placeholder="Last name" onChange={changeLast} />
        <Input placeholder="Email address" onChange={changeEmail} />
        <Button
          disabled={loading}
          onClick={() => {
            const myPromise = register();
            toast.promise(
              myPromise,
              {
                pending: "waiting...",
              },
              {
                style: {
                  background: "black",
                },
              }
            );
          }}
        >
          Register
        </Button>
      </Modal>
    </Layout>
  );
};

export default RegisterModal;
