import React from 'react';

interface TableProps {
  data: any[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>수정일</th>
          <th>코멘트 수</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row: any, index: number) => (
          <tr key={row.id}>
            <td>{index + 1}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
