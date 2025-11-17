import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Snowflake, Flame, FileText } from "lucide-react";
import coldTemplate from "@/assets/cold-template.png";
import hotTemplate from "@/assets/hot-template.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <FileText className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shannon Technical Drawing Templates
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a template model to create professional technical drawings with ease
          </p>
        </div>

        {/* Template Selection Cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Shannon Cold Card */}
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="aspect-[4/3] bg-muted relative overflow-hidden border-b">
              <img
                src={coldTemplate}
                alt="Shannon Cold Template"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 text-primary">
                  <Snowflake className="h-8 w-8" />
                  <span className="text-2xl font-bold text-foreground">Cold Model</span>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Snowflake className="h-5 w-5 text-primary" />
                Shannon Cold
              </CardTitle>
              <CardDescription>
                Technical drawing template for cold storage units with specialized configuration options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/shannon-cold">
                <Button className="w-full" size="lg">
                  Select Cold Template
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Shannon Hot Card */}
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="aspect-[4/3] bg-muted relative overflow-hidden border-b">
              <img
                src={hotTemplate}
                alt="Shannon Hot Template"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="flex items-center gap-2 text-destructive">
                  <Flame className="h-8 w-8" />
                  <span className="text-2xl font-bold text-foreground">Hot Model</span>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-destructive" />
                Shannon Hot
              </CardTitle>
              <CardDescription>
                Technical drawing template for hot storage units with specialized configuration options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/shannon-hot">
                <Button className="w-full" size="lg" variant="destructive">
                  Select Hot Template
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Professional Templates</h3>
              <p className="text-sm text-muted-foreground">
                Pre-designed templates with precise positioning for all technical specifications
              </p>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Snowflake className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Easy Configuration</h3>
              <p className="text-sm text-muted-foreground">
                Simple form inputs with checkboxes, date pickers, and text fields for quick data entry
              </p>
            </div>
            <div className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Flame className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">PDF Export</h3>
              <p className="text-sm text-muted-foreground">
                Generate high-quality PDF documents ready for printing and sharing with clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
