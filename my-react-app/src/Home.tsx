import React, { useEffect, useState } from 'react';
import { getGitHubIssues } from './api';

import blackArrowIcon from './image/black-arrow.png';

const Home: React.FC = () => {
  // const [tableData, setTableData] = useState<any[]>([]); ;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [issueStatus, setIssueStatus] = useState('이슈 상태');
  const [sortStatus, setSortStatus] = useState('작성일 순');

  const tableData = [{ id: 1 }, { id: 2 }];
  const openFilterModal = () => {
    setFilterModalOpen(true);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        // 퍼블 완료후 데이터 확인필요
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
            <button
              id='issueStatusButton'
              className='border-btn'
              onClick={openModal}
            >
              {issueStatus}
              <img
                className='arrow'
                src={blackArrowIcon}
                alt='Icon'
              />
            </button>
            <button className='date-btn' onClick={openFilterModal}>
              {sortStatus}
              <img className='arrow' src={blackArrowIcon} alt='Icon' />
            </button>
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
};
export default Home;
