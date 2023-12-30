import React from 'react';
import { format } from 'date-fns';

interface TableProps {
  data: any[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const formatDate = (dateString: string) => {
    const formattedDate = format(new Date(dateString), 'yyyy-MM-dd');
    return formattedDate;
  };

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
            <td>{row.title}</td>
            <td>{row.user.login}</td>
            <td className='tlign-c'>{formatDate(row.created_at)}</td>
            <td className='tlign-c'>{formatDate(row.updated_at)}</td>
            <td className='tlign-r'>{row.comments}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
