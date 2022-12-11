function Footer() {
  return (
    <div className="bg-custom-gray3 flex flex-col items-center gap-2 py-4">
      <div className="flex gap-2 text-center  break-words">
        <p className="cursor-pointer hover:underline">Home</p>|
        <p className="cursor-pointer hover:underline">About us</p>|
        <p className="cursor-pointer hover:underline">Contact </p>|
        <p className="cursor-pointer hover:underline">Privacy </p>|
        <p className="cursor-pointer hover:underline">Terms </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-2 justify-center items-center">
        <p className="cursor-pointer hover:underline">
          Alternative to back4page |
        </p>
        <p className="cursor-pointer hover:underline">
          Website similiar to back4page |
        </p>

        <p className="cursor-pointer hover:underline">
          Best sites like back4page |
        </p>
        <p className="cursor-pointer hover:underline">back4page replacement</p>
      </div>
      <p className="text-[15px]">
        &copy; 2022{" "}
        <span className="cursor-pointer hover:underline">back4page.com</span>
      </p>
    </div>
  );
}

export default Footer;
