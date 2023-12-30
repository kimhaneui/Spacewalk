import React, { useEffect, useState } from 'react';
import { getGitHubIssues } from './api';



const Home: React.FC = () => {
    const [tableData, setTableData] = useState<any[]>([]); ;

    useEffect(() => {
        async function fetchData() {
          try {
            const tableData = await getGitHubIssues();
            setTableData(tableData);
          } catch (error) {
            console.error('Error:', error);
          }
        }
        fetchData();
      },[]);
    return (
        <div>
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
            {tableData.map((row: any, index: number) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    )
}
export default Home;