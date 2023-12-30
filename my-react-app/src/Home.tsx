import React, { useEffect, useState } from 'react';
import { getGitHubIssues } from './api';



const Home: React.FC = () => {
    // const [tableData, setTableData] = useState<any[]>([]); ;
    const tableData = [
        { id: 1 },
        { id: 2 },
    ];
    useEffect(() => {
        async function fetchData() {
            try {
                // const tableData = await getGitHubIssues();
                // setTableData(tableData);
            } catch (error) {
                console.error('Error:', error);
            }
        }
        fetchData();
    }, []);
    return (
        <div id='layout'>
            <div className='table'>
                <div className='table-header'>
                    <h3>이슈정리</h3>
                    <div className='btn-container'>
                        <button className="border-btn">이슈 상태 v</button>
                        <button className='date-btn'>작성일 순 v</button>
                    </div>
                </div>
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
        </div>
    );
}
export default Home;