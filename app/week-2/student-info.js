import React from 'react';
import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <h1>Issac Ho</h1>
      <p>
        <Link href="https://github.com/Issac-Ho/cprg306-assignments" passHref>
        https://github.com
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;