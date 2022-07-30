import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { BotoesSetas, DivBotoes, SpanBotoes } from "./style";

export const Botoes = ({
  offset,
  setOffset,
  buttonNextDisabled,
  buttonPreviousDisabled,
}) => {
  return (
    <>
      <DivBotoes>
        <SpanBotoes>Próxima Página</SpanBotoes>
        <BotoesSetas
          disabled={buttonNextDisabled}
          onClick={() => setOffset(offset + 1)}
        >
          <AiFillCaretRight size={30} />
        </BotoesSetas>
        <BotoesSetas
          disabled={buttonPreviousDisabled}
          onClick={() => setOffset(offset - 1)}
        >
          <AiFillCaretLeft size={30} />
        </BotoesSetas>
        <SpanBotoes>Página Anterior</SpanBotoes>
      </DivBotoes>
    </>
  );
};
