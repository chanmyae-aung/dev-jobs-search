import React, { useEffect } from "react";
import Swal from "sweetalert2";

export default function ComfirmBox({toggleModal, setCloseForm}) {
  Swal.fire({
    title: "Success!",
    text: "Your application has been successfully received.",
    icon: 'success',
    // showCancelButton: true,
    confirmButtonColor: "#3085d6",
    // cancelButtonColor: "#d33",
    confirmButtonText: "Close",
  }).then((result) => {
    if (result.isConfirmed) {
     toggleModal(false)
     setCloseForm(false)
    }
  });
}
