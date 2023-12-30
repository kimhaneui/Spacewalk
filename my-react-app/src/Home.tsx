import React, { useEffect, useState } from 'react';
import { getGitHubIssues } from './api';

// image
import blackArrowIcon from './image/black-arrow.png';
import blueArrowIcon from './image/blue-arrow.png';

// component
import SortModal from './modal/SortModal';
import FilterModal from './modal/FilterModal';
import Table from './component/Table';
import Pagination from './component/Pagination';

const Home: React.FC = () => {
  // const [tableData, setTableData] = useState<any[]>([]); ;
  const [sortModalOpen, setSortModalOpen] = useState(false);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [issueStatus, setIssueStatus] = useState('all');
  const [sortStatus, setSortStatus] = useState({
    id: 'created',
    text: '작성일 순',
  });
  const [isBlueIcon, setIsBlueIcon] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const tableData = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
  ];

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

  const openFilterModal = () => {
    setFilterModalOpen(true);
  };
  const openSortModal = () => {
    setSortModalOpen(true);
  };
  const closeSortModal = (item: any) => {
    setSortStatus(item);
    setSortModalOpen(false);
  };
  const closeFilterModal = (id: any) => {
    if (id !== 'all') {
      setIssueStatus(id);
      setIsBlueIcon(true);
    } else {
      setIsBlueIcon(false);
    }
    setFilterModalOpen(false);
  };
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  return (
    <div id='layout'>
      <div className='table'>
        <div className='table-header'>
          <h3>이슈정리</h3>
          <div className='btn-container'>
            <button
              id='issueStatusButton'
              className={`border-btn ${issueStatus !== 'all' ? 'blue' : ''}`}
              onClick={openFilterModal}
            >
              {issueStatus === 'all' ? '이슈 상태' : issueStatus}
              <img
                className='arrow'
                src={isBlueIcon ? blueArrowIcon : blackArrowIcon}
                alt='Arrow Icon'
              />
            </button>
            <button className='date-btn' onClick={openSortModal}>
              {sortStatus.text}
              <img className='arrow' src={blackArrowIcon} alt='Icon' />
            </button>
            <SortModal isOpen={sortModalOpen} onClose={closeSortModal} />
            <FilterModal isOpen={filterModalOpen} onClose={closeFilterModal} />
          </div>
        </div>
        <Table data={currentItems} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default Home;
