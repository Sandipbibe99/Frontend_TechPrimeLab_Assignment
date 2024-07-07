import React, { createContext, useState, useEffect } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState('')
    const [selectInput, setSelectInput] = useState()
    const [projectsPerPage, setProjectsPerPage] = useState("");
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setProjectsPerPage(tableData.length);
            } else {
                setProjectsPerPage(7);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [tableData]);
    const getProjectData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/project/getProjectsbyUserid`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                },
                credentials: "include"
            });
            const data = await response.json();
            if (response.ok) {
                setTableData(data.projects);
            } else {
                console.log(data);
            }
        } catch (error) {
            console.log("Internal server error" + error);
        }
    };

    useEffect(() => {
        getProjectData();
    }, []);

    const sortedData = (data) => {
        if (!selectInput) {
            return data;
        }

        return data.slice().sort((a, b) => {
            const valueA = String(a[selectInput]).toLowerCase()
            const valueB = String(b[selectInput]).toLowerCase()

            if (valueA < valueB) {
                return -1;
            }
            if (valueA > valueB) {
                return 1;
            }
            return 0;
        })
    }

    const filteredData = tableData.filter(item => {
        const values = Object.values(item).map(value => value.toString().toLowerCase())
        return values.some(value => value.includes(searchInput.toLocaleLowerCase()))

    });

    const sortedAndFilteredData = sortedData(filteredData)
    const totalPages = Math.ceil(filteredData.length / projectsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages);
    };

    const handleInutChange = (e) => {
        setSearchInput(e.target.value)
        setCurrentPage(1)
    }
    const handleClearInput = () => {
        setSearchInput('')
    }
    const handleClearSelect = () => {
        setSelectInput('')
    }

    const [drawer, setDrawer] = useState(false)

    const handleOpenDrawer = () => {
        setDrawer(!drawer)
    }

    const handleSelectChange = (e) => {
        const sortByValue = e.target.value;
        setSelectInput(sortByValue);

    }

    const handleDrawerSelect = (e) => {
        const sortByValue = e.target.getAttribute('data-value');
        setSelectInput(sortByValue);
        handleOpenDrawer()
    }

    const lastIndex = currentPage * projectsPerPage;
    const firstIndex = lastIndex - projectsPerPage;
    const currentPageData = sortedAndFilteredData.slice(firstIndex, lastIndex);
    const isUserAuthenticate = async () => {
        try {
            const response = await fetch("https://backend-techprimelab-assignment.onrender.com/api/project/checkAuth", {
                method: 'GET',
                headers: {
                    "Content-type": "application/json",
                },
                credentials: 'include',
            });

            if (response.ok) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    };

    return (
        <ProjectContext.Provider value={{
            getProjectData, tableData, setTableData, currentPage, totalPages, currentPageData,
            handleNextPage, handleClearInput, handlePreviousPage, handlePageClick, handleFirstPage, handleLastPage, handleInutChange, searchInput, handleSelectChange,
            handleClearInput, handleClearSelect, handleOpenDrawer, drawer, handleDrawerSelect, isUserAuthenticate
        }}
        >
            {children}
        </ProjectContext.Provider>
    );
};
