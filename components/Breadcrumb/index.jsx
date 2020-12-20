import React from "react";
import Link from "next/link";
import { RightArrow } from "@/utils/icons";

// pathList = [
//   {name, path}
// ]

const Breadcrumb = ({ pathList }) => {
  return (
    <nav className='text-gray-700 font-semibold' aria-label='Breadcrumb'>
      <ol className='list-none p-0 inline-flex'>
        {pathList.map(({ name, path }, idx) => (
          <Link href={path} key={`bc_${idx}`}>
            <li className='flex items-center'>
              <a className="cursor-pointer">{name}</a>
              {idx < pathList.length && (
                <div className='h-full flex items-center'>
                  <div className='h-2 w-2 mx-3 text-gray-400'>
                    <RightArrow />
                  </div>
                </div>
              )}
            </li>
          </Link>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumb.defaultProps = {
  pathList: [],
};

export default Breadcrumb;
