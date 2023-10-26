// import { axiosInstance } from "@/axiosInstance";
// import { NewUser, TokenInfo } from "@/pages/users/types";
// import { Member } from "@/types/common";
// import axios, { AxiosResponse } from "axios";
// import { useRouter } from "next/router";
// import { useState } from "react";
// import { useUser } from "./useUser";

// interface UseAuth {
//   signin: (email: string, password: string) => Promise<void>;
//   signup: (email: string, password: string, nickname: string) => Promise<void>;
//   signout: () => void;
//   isUserModalOpen: boolean;
//   setIsUserModalOpen: (isUserModalOpen: boolean) => void;
//   modalText: string;
//   setModalText: (text: string) => void;
//   openModal: boolean;
//   setOpenModal: (openModal: boolean) => void;
//   success: boolean;
//   setSuccess: (success: boolean) => void;
// }

// type UserResponse = { data: { member: Member; tokenInfo: TokenInfo } };
// type ErrorResponse = { message: string };
// type AuthResponseType = UserResponse | ErrorResponse;

// export function useAuth(): UseAuth {
//   const SERVER_ERROR = "There was an error contacting the server.";
//   const { clearUser, updateUser } = useUser();
//   const [isUserModalOpen, setIsUserModalOpen] = useState(false);
//   const [modalText, setModalText] = useState("");
//   const [openModal, setOpenModal] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const router = useRouter();
//   async function authServerCall(
//     urlEndpoint: string,
//     email: string,
//     password: string,
//     nickname: string
//   ): Promise<void> {
//     try {
//       const { status }: AxiosResponse<AuthResponseType> = await axiosInstance({
//         url: urlEndpoint,
//         method: "POST",
//         data: { email, password, nickname },
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (status === 201 || status === 200) {
//         setIsUserModalOpen(true);
//         setSuccess(true);
//         debugger;

//         router.replace(`/`);
//       } else {
//         setIsUserModalOpen(false);
//         setSuccess(false);
//       }
//     } catch (errorResponse) {
//       const status =
//         axios.isAxiosError(errorResponse) && errorResponse?.response?.status
//           ? errorResponse?.response?.status
//           : SERVER_ERROR;

//       setSuccess(false);

//       if (status === 422) {
//         setModalText("같은 닉네임과 이메일로 가입된 사용자가 있습니다.");
//         setIsUserModalOpen(true);
//       } else if (status === 400) {
//         setModalText("중복된 닉네임입니다. 다른 닉네임을 사용해주세요!");
//         setIsUserModalOpen(true);
//       } else if (status === 409) {
//         setModalText("이미 가입된 이메일입니다.");
//         setIsUserModalOpen(true);
//       } else {
//         setIsUserModalOpen(false);
//       }
//     }
//   }
//   async function authLoginServerCall(
//     urlEndpoint: string,
//     email: string,
//     password: string
//   ): Promise<void> {
//     try {
//       const { data, status }: AxiosResponse<AuthResponseType> =
//         await axiosInstance({
//           url: urlEndpoint,
//           method: "POST",
//           data: { email, password },
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//       if (status === 201 || status === 200) {
//         if ("member" in data && "tokenInfo" in data) {
//           const loggedMember = data.member as NewUser;
//           const loggedMemberToken = data.tokenInfo as TokenInfo;
//           updateUser({
//             accessToken: loggedMemberToken?.accessToken,
//             nickname: loggedMember?.nickname,
//             email: loggedMember?.email,
//             id: loggedMember.id,
//           });
//           debugger;
//           //   router.replace(`/`);
//           // navigate('/');
//         }
//       }
//     } catch (errorResponse) {
//       const status =
//         axios.isAxiosError(errorResponse) && errorResponse?.response?.status
//           ? errorResponse?.response?.status
//           : SERVER_ERROR;
//       status === 403
//         ? alert("이메일과 비밀번호가 일치하지 않습니다.")
//         : alert(`status code : ${status}!`);
//     }
//   }

//   async function signin(email: string, password: string): Promise<void> {
//     authLoginServerCall("/members/signin", email, password);
//   }
//   async function signup(
//     email: string,
//     password: string,
//     nickname: string
//   ): Promise<void> {
//     authServerCall("/members/signup", email, password, nickname);
//   }

//   function signout(): void {
//     // clear user from stored user data
//     clearUser();
//     debugger;
//     router.replace(`/`);
//     //   navigate('/');
//   }

//   return {
//     signin,
//     signup,
//     signout,
//     isUserModalOpen,
//     setIsUserModalOpen,
//     modalText,
//     setModalText,
//     openModal,
//     setOpenModal,
//     success,
//     setSuccess,
//   };
// }
