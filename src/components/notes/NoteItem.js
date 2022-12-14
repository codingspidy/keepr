import { useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  styled,
  IconButton,
} from "@mui/material";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
  PushPin as PinIcon,
} from "@mui/icons-material";
import NoteContext from "../../context/NoteContextProvider";

const StyledCard = styled(Card)({
  position: "relative",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  margin: "8px",
  paddingBlock: "7px",
  minHeight: "120px",
  width: "260px",
  boxShadow: "none",
});

const CardCtaMobile = styled(CardActions)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const CardCta = styled(CardActions)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));


const PinButton = styled(IconButton)({
  position: "absolute",
  top: "0",
  color: "#757575",
  right: "0",
});

const NoteItem = ({ id, title, body, handleModalOpen }) => {
  const [showCardActions, setShowCardActions] = useState(false);
  const { handlePinClick } = useContext(NoteContext);

  return (
    <StyledCard
      onMouseOver={() => setShowCardActions(true)}
      onMouseOut={() => setShowCardActions(false)}
    >
      <CardContent
        onClick={() => {
          handleModalOpen(id, title, body);
        }}
        sx={{ wordWrap: "break-word" }}
      >
        <Typography
          sx={{ fontWeight: "600", marginBottom: "3px", fontSize: ".92rem" }}
        >
          {title}
        </Typography>
        <Typography>{body}</Typography>
      </CardContent>
      {showCardActions && (
        <CardCta>
          <PinButton
            onClick={(e) => {
              handlePinClick(e, id);
            }}
          >
            <PinIcon fontSize="small" />
          </PinButton>
          <IconButton sx={{ position: "absolute", bottom: "0", right: "30px" }}>
            <Archive
              fontSize="small"
              style={{ marginLeft: "auto", color: "#757575" }}
            />
          </IconButton>
          <IconButton sx={{ position: "absolute", bottom: "0", right: "0" }}>
            <Delete fontSize="small" sx={{ color: "#757575" }} />
          </IconButton>
        </CardCta>
      )}
      <CardCtaMobile>
        <PinButton
          onClick={(e) => {
            handlePinClick(e, id);
          }}
        >
          <PinIcon fontSize="small" />
        </PinButton>
        <IconButton sx={{ position: "absolute", bottom: "0", right: "30px" }}>
          <Archive
            fontSize="small"
            style={{ marginLeft: "auto", color: "#757575" }}
          />
        </IconButton>
        <IconButton sx={{ position: "absolute", bottom: "0", right: "0" }}>
          <Delete fontSize="small" sx={{ color: "#757575" }} />
        </IconButton>
      </CardCtaMobile>
    </StyledCard>
  );
};

export default NoteItem;
