import swal from "@sweetalert/with-react";

export const deleteAlert = (message) =>
  swal({
    title: "Are you sure?",
    text: message,
    icon: "warning",
    buttons: true,
    dangerMode: true,
  });

export const successAlert = (message) =>
  swal(message, {
    icon: "success",
    buttons: false,
    timer: 3000,
  });
