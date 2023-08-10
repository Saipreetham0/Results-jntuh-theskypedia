import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="flex justify-center text-center m-2 text-xs	 text-black-1600  font-bold my-6">
        <p>
          Copyright &copy; 2023
          <br /> <Link href="https://theskypedia.com"> The Skypedia</Link>
        </p>
      </div>
    </>
  );
};
export default Footer;
