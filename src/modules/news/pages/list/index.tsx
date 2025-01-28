import "./index.css";

import { useEffect, useState } from "react";

import PageTitle from "../../../../components/page-title";
import { getNews, News } from "../../../../services/news-api.service";
import DeleteNews from "./components/delete-news";
import CreateOrEditNews from "./components/create-or-edit-news";

function ListNews() {
  const [isLoading, setIsLoading] = useState(false);
  const [newsData, setNewsData] = useState<News | null>(null);
  const [newsId, setNewsId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openCreateOrEditModal, setOpenCreateOrEditModal] = useState(false);

  useEffect(() => {
    async function loadNews() {
      setIsLoading(true);
      const news = await getNews();
      setNewsData(news);
      setIsLoading(false);
    }
    loadNews();
  }, []);

  const handleCreateOrEdit = (newsId: number | null) => {
    setNewsId(newsId);
    setOpenCreateOrEditModal(true);
  };

  return (
    <div className="news-page">
      <PageTitle title="Notícias" />
      <div>
        <div className="news-header">
          <input
            className="search-field"
            type="text"
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Pesquise pelo título"
          />
          <button
            className="create-button"
            onClick={() => handleCreateOrEdit(null)}
          >
            Criar Notícias
          </button>
        </div>
        <div className="news-feed">
          {isLoading && <p>Carregando...</p>}
          {newsData?.error && <p>{newsData?.error}</p>}
          {newsData?.data &&
            newsData?.data
              .filter((item) => item.titulo.toLowerCase().includes(search))
              .map((item) => (
                <div key={item.id} className="news-card">
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                  <div className="actions">
                    <button
                      onClick={() => {
                        handleCreateOrEdit(item.id);
                      }}
                    >
                      Editar
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => {
                        setNewsId(item.id);
                        setOpenDeleteModal(true);
                      }}
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
      {openDeleteModal && (
        <DeleteNews
          setOpenDeleteModal={setOpenDeleteModal}
          newsId={Number(newsId)}
        />
      )}
      {openCreateOrEditModal && (
        <CreateOrEditNews
          setCloseModal={setOpenCreateOrEditModal}
          newsId={newsId ?? null}
        />
      )}
    </div>
  );
}

export default ListNews;
