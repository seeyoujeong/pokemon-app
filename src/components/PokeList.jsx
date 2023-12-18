import PokeCard from "./PokeCard";
import { LIMIT } from "../constants/api";

const PokeList = ({ pokemons, setOffset }) => {
  return (
    <>
      <section className="flex flex-col justify-center items-center pt-6 overflow-auto z-0">
        <div className="flex flex-wrap gap-[16px] justify-center px-2 max-w-4xl">
          {pokemons.length > 0 ? (
            pokemons.map(({ url, name }) => (
              <PokeCard key={url} name={name} url={url} />
            ))
          ) : (
            <h2 className="font-medium text-lg text-slate-900 mb-1">
              포켓몬이 없습니다.
            </h2>
          )}
        </div>
      </section>
      <div className="text-center">
        <button
          onClick={() => setOffset((prev) => prev + LIMIT)}
          className="bg-slate-800 px-6 py-2 my-4 text-base rounded-lg font-bold text-white"
        >
          더 보기
        </button>
      </div>
    </>
  );
};

export default PokeList;
