import './index.css';

import Modal from '../../../../../../components/modal';
import { deleteNews } from '../../../../../../services/news-api.service';

function DeleteNews({
  setOpenDeleteModal,
  newsId,
}: {
  setOpenDeleteModal: (value: boolean) => void;
  newsId: number;
}) {
  const handleDelete = async () => {
    await deleteNews(newsId);
    setOpenDeleteModal(false);
    window.location.reload();
  };

  return (
    <Modal setCloseModal={setOpenDeleteModal}>
      <div>
        <p>Tem certeza que deseja excluir essa notícia?</p>
        <div className="delete-news-actions">
          <button onClick={() => setOpenDeleteModal(false)}>Cancelar</button>
          <button className="delete" onClick={handleDelete}>
            Sim
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteNews;
