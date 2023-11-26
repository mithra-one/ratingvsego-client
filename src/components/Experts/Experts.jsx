import React, { useEffect, useState } from "react";
import s from "./Experts.module.scss";
import ExpertItem from "./ExpertItem/ExpertItem";
import ExpertListSkeleton from "../Skeletons/ExpertListSkeleton";

const Experts = () => {
  const [isExpertsLoading, setIsExpertsLoading] = useState(false);
  const [expertsLoadingError, setExpertsLoadingError] = useState(null);

  const [expertsList, setExpertsList] = useState([]);
  useEffect(() => {
    const fetchExperts = async () => {
      setIsExpertsLoading(true);

      try {
        const res = await fetch(`/api/expert/get/`);
        const data = await res.json();

        if (data.success === false) {
          setIsExpertsLoading(false);
          setExpertsLoadingError(data.message);
        }
        data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        setIsExpertsLoading(false);
        setExpertsList(data);
      } catch (err) {
        setIsExpertsLoading(false);
        setExpertsLoadingError(err);
      }
    };

    fetchExperts();
  }, []);

  return (
    <>
      {isExpertsLoading && <ExpertListSkeleton />}
      {expertsList.length > 0 && (
        <div className={s.experts}>
          <h1 className={s.title}>Достопочтенные виртуозы экспертизы</h1>
          <div className={s.list}>
            {expertsList.map((expert) => (
              <ExpertItem key={expert._id} expert={expert} />
            ))}
          </div>
        </div>
      )}
      {expertsLoadingError && (
        <div className={s.serverError}>{expertsLoadingError}</div>
      )}
    </>
  );
};

export default Experts;
