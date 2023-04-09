import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FaqsType, faqsData } from "dh-marvel/components/faqs/faqsData";
import { Button, Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));


export default function FaqAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>("");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const { back } = useRouter();

  return (
    <Container
      style={{
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        sx={{ my: 2 }}
        variant="outlined"
        size="small"
        startIcon={<NavigateBeforeIcon />}
        onClick={back}
      >
        Voltar para a página anterior
      </Button>
      <Grid container>
        <Grid item direction="column" >
          <Typography variant="h1" sx={{textAlign: "center", paddingTop: "2rem", paddingBottom: "4rem"}}>Perguntas frequentes</Typography>
          {faqsData.map((faq: FaqsType) => {
            const { id, question, answer } = faq;
            return (
              <>
                <Accordion
                  expanded={expanded === id}
                  onChange={handleChange(id)}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography>{question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}
