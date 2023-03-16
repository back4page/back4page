import Link from "next/link";
import Layout from "../components/Layout";
import {
  dashboardLinks,
  dashboardLinks2,
} from "../components/Dashboard/dashboardLinks";
import { FaSignOutAlt } from "react-icons/fa";
import useLogOut from "../hooks/useLogOut";

function DashboardPage() {
  const { logoutUser } = useLogOut();

  const handleLogOut = () => {
    logoutUser();
  };

  return (
    <>
      <div className="mt-4 py-1">
        <div className="grid grid-cols-2 gap-[30px] text-custom-yellow2">
          <div className="">
            <div className="rounded border border-gray-800/50 bg-custom-gray2 overflow-hidden">
              <div className="divide-y divide-gray-800/50 ">
                {dashboardLinks.map((link, i) => (
                  <div key={i}>
                    <Link href={link.link} passHref>
                      <a>
                        <button className="flex items-center gap-[7px] w-full px-4 lg:px-5 py-[13px] text-left hover:bg-custom-gray5 hover:text-custom-gray4 focus:bg-custom-gray5 focus:text-custom-gray4 active:text-custom-gray6">
                          <span className="text-[15px]">{link.icon}</span>
                          {link.name}
                        </button>
                      </a>
                    </Link>
                  </div>
                ))}
                <button
                  className="flex items-center gap-[7px] w-full px-4 lg:px-5 py-[13px] text-left hover:bg-custom-gray5 hover:text-custom-gray4 focus:bg-custom-gray5 focus:text-custom-gray4 active:text-custom-gray6"
                  onClick={handleLogOut}
                >
                  <span className="text-[15px]">
                    <FaSignOutAlt />
                  </span>
                  Log Out
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <div className="rounded border border-gray-800/50 divide-y divide-gray-800/50 bg-custom-gray2 overflow-hidden">
              {dashboardLinks2.map((link, i) => (
                <div key={i}>
                  <Link href={link.link} passHref>
                    <a>
                      <button className="flex items-center gap-[7px] w-full px-4 lg:px-5 py-[13px] text-left hover:bg-custom-gray5 hover:text-custom-gray4 focus:bg-custom-gray5 focus:text-custom-gray4 active:text-custom-gray6">
                        <span className="text-[15px]">{link.icon}</span>
                        {link.name}
                      </button>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 mb-5 border-t  border-gray-800/50"></div>

      <div className="pb-10">
        <h1 className="text-3xl lg:font-medium">Do you know?</h1>
        <p className="mt-2 text-custom-yellow2 font-medium">
          You can enjoy a lot of things from back4page:
        </p>
        <p className="mt-6">
          <span className="text-custom-yellow2 font-medium pr-1">
            Message Blast:
          </span>
          Send up to 10000 messages in a few clicks. If 3% users respond, you
          are successful.
        </p>
        <p className="mt-6">
          <span className="text-custom-yellow2 font-medium pr-1">
            Premium Membership:
          </span>
          Send unlimited queries with high priority. You pick an advertiser,
          send your message and pick next. This is a number game, only a few
          will reply, true fact.
        </p>
        <p className="mt-6">
          <span className="text-custom-yellow2 font-medium pr-1">
            External Sites:
          </span>
          You can post up to 50 external sites during publishing a post.
        </p>
        <p className="mt-6">
          <span className="text-custom-yellow2 font-medium pr-1">
            CashApp BTC:
          </span>
          You can deposit with CashApp Bitcoin and get 20% bonus every time.
        </p>
        <p>
          A. Get BTC id from
          <span className="link"> Buy Credit</span> page.
        </p>
        <p>B.(1) Go to CashApp and buy $100 BTC (for an example).</p>
        <p>
          B.(2) Go to CashApp BTC then withdraw put BTC id you got from us and
          complete withdraw. DONE!
        </p>
        <p>It is easy, annonymous and will take just one minute.</p>
        <p>
          <i>
            *You may need to verify your cashApp, it is automated and will take
            one minute.
          </i>
        </p>
        <p className="mt-6">
          <span className="text-custom-yellow2 font-medium pr-1">
            Cover Star:
          </span>
          You can sponsor your ad and bring it to homepage which we call cover
          star. Noticed by everyone and brings a lot of leads.
        </p>
      </div>
    </>
  );
}

export default DashboardPage;
