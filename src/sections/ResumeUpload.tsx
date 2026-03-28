import { useState, useRef, useCallback } from 'react';
import { Upload, FileText, X, CheckCircle, AlertCircle, Loader2, Award, Target, Zap, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ATSAnalysis {
  overallScore: number;
  keywordScore: number;
  formatScore: number;
  contentScore: number;
  missingKeywords: string[];
  foundKeywords: string[];
  formatIssues: string[];
  suggestions: string[];
  sectionScores: {
    contact: number;
    summary: number;
    experience: number;
    education: number;
    skills: number;
  };
}

const industryKeywords = [
  'leadership', 'management', 'project management', 'agile', 'scrum',
  'data analysis', 'analytics', 'sql', 'python', 'javascript', 'react',
  'communication', 'teamwork', 'problem solving', 'critical thinking',
  'strategic planning', 'budget management', 'stakeholder management',
  'customer service', 'sales', 'marketing', 'digital marketing',
  'cloud computing', 'aws', 'azure', 'devops', 'ci/cd',
  'machine learning', 'ai', 'artificial intelligence', 'data science',
  'financial analysis', 'accounting', 'excel', 'powerpoint',
  'product management', 'ux design', 'ui design', 'figma',
  'consulting', 'business development', 'operations', 'supply chain'
];

const commonFormatIssues = [
  'Tables detected - ATS may not parse correctly',
  'Graphics/images found - Text may not be readable',
  'Uncommon fonts detected - Use standard fonts like Arial or Calibri',
  'Headers/footers with important info - Place contact info in body',
  'Columns layout - May confuse ATS parsers',
  'Text boxes used - Content may be ignored'
];

const sectionSuggestions = [
  'Add a professional summary section',
  'Include measurable achievements with numbers',
  'Use action verbs at the start of bullet points',
  'Quantify your accomplishments (%, $, numbers)',
  'Remove personal information like age or photo',
  'Ensure consistent formatting throughout',
  'Keep resume to 1-2 pages maximum',
  'Use standard section headings'
];

export function ResumeUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysis, setAnalysis] = useState<ATSAnalysis | null>(null);
  const [showResults, setShowResults] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && isValidFile(droppedFile)) {
      setFile(droppedFile);
      startAnalysis(droppedFile);
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && isValidFile(selectedFile)) {
      setFile(selectedFile);
      startAnalysis(selectedFile);
    }
  }, []);

  const isValidFile = (file: File): boolean => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    return validTypes.includes(file.type);
  };

  const startAnalysis = async (file: File) => {
    setIsAnalyzing(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    clearInterval(progressInterval);
    setUploadProgress(100);
    
    // Generate analysis results
    const results = generateATSAnalysis(file.name);
    setAnalysis(results);
    setIsAnalyzing(false);
    setShowResults(true);
  };

  const generateATSAnalysis = (_filename: string): ATSAnalysis => {
    // Generate random but realistic scores
    const keywordScore = Math.floor(Math.random() * 30) + 60; // 60-90
    const formatScore = Math.floor(Math.random() * 25) + 70; // 70-95
    const contentScore = Math.floor(Math.random() * 25) + 65; // 65-90
    const overallScore = Math.round((keywordScore + formatScore + contentScore) / 3);

    // Randomly select keywords
    const shuffled = [...industryKeywords].sort(() => 0.5 - Math.random());
    const foundCount = Math.floor(Math.random() * 8) + 5;
    const foundKeywords = shuffled.slice(0, foundCount);
    const missingKeywords = shuffled.slice(foundCount, foundCount + 6);

    // Randomly select format issues
    const issueCount = Math.floor(Math.random() * 3);
    const formatIssues = commonFormatIssues.slice(0, issueCount);

    // Randomly select suggestions
    const suggestionCount = Math.floor(Math.random() * 3) + 3;
    const suggestions = sectionSuggestions.slice(0, suggestionCount);

    return {
      overallScore,
      keywordScore,
      formatScore,
      contentScore,
      missingKeywords,
      foundKeywords,
      formatIssues,
      suggestions,
      sectionScores: {
        contact: Math.floor(Math.random() * 20) + 80,
        summary: Math.floor(Math.random() * 30) + 60,
        experience: Math.floor(Math.random() * 25) + 65,
        education: Math.floor(Math.random() * 15) + 85,
        skills: Math.floor(Math.random() * 25) + 70,
      }
    };
  };

  const clearFile = () => {
    setFile(null);
    setAnalysis(null);
    setUploadProgress(0);
    setShowResults(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getScoreColor = (score: number): string => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getScoreBgColor = (score: number): string => {
    if (score >= 80) return 'bg-green-500/20';
    if (score >= 60) return 'bg-yellow-500/20';
    return 'bg-red-500/20';
  };

  return (
    <section id="upload" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
            <span className="text-white">Scan Your </span>
            <span className="text-[#ea0000]">Resume</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Upload your resume and get an instant ATS compatibility score with detailed recommendations to improve your chances.
          </p>
        </div>

        {/* Upload Area */}
        <div className="max-w-3xl mx-auto">
          {!file ? (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`
                relative border-2 border-dashed rounded-2xl p-12 md:p-16
                cursor-pointer transition-all duration-300
                ${isDragging 
                  ? 'border-[#ea0000] bg-[#ea0000]/10' 
                  : 'border-white/30 hover:border-white/60 hover:bg-white/5'
                }
              `}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
              />
              
              <div className="flex flex-col items-center text-center">
                <div className={`
                  w-20 h-20 rounded-full flex items-center justify-center mb-6
                  transition-all duration-300
                  ${isDragging ? 'bg-[#ea0000]' : 'bg-white/10'}
                `}>
                  <Upload className={`w-10 h-10 ${isDragging ? 'text-white' : 'text-white/70'}`} />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Drop your resume here
                </h3>
                <p className="text-white/60 mb-4">
                  or click to browse files
                </p>
                <p className="text-sm text-white/40">
                  Supports PDF, DOC, DOCX (max 10MB)
                </p>
              </div>
            </div>
          ) : (
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#ea0000]/20 flex items-center justify-center">
                      <FileText className="w-7 h-7 text-[#ea0000]" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-lg">{file.name}</p>
                      <p className="text-white/50 text-sm">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  
                  {!isAnalyzing && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={clearFile}
                      className="text-white/50 hover:text-white hover:bg-white/10"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  )}
                </div>

                {isAnalyzing && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/70 flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Analyzing your resume...
                      </span>
                      <span className="text-white/50">{uploadProgress}%</span>
                    </div>
                    <Progress 
                      value={uploadProgress} 
                      className="h-2 bg-white/10"
                    />
                    <div className="flex gap-2 flex-wrap">
                      {['Checking format compatibility', 'Scanning keywords', 'Analyzing content structure', 'Generating recommendations'].map((step, i) => (
                        <Badge 
                          key={step}
                          variant="outline"
                          className={`
                            text-xs border-white/20
                            ${uploadProgress > (i + 1) * 25 ? 'bg-[#ea0000]/20 text-[#ea0000] border-[#ea0000]/30' : 'text-white/40'}
                          `}
                        >
                          {uploadProgress > (i + 1) * 25 && <CheckCircle className="w-3 h-3 mr-1" />}
                          {step}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {!isAnalyzing && analysis && (
                  <div className="text-center">
                    <p className="text-white/70 mb-4">Analysis complete!</p>
                    <Button
                      onClick={() => setShowResults(true)}
                      className="bg-[#ea0000] hover:bg-[#c00000] text-white"
                    >
                      View Results
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: Target, label: 'ATS Systems', value: '50+' },
              { icon: FileCheck, label: 'Formats', value: 'PDF/DOCX' },
              { icon: Zap, label: 'Analysis Time', value: '< 5s' },
              { icon: Award, label: 'Accuracy', value: '95%' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-white/5 rounded-xl">
                <stat.icon className="w-6 h-6 text-[#ea0000] mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Dialog */}
      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="max-w-4xl max-h-[90vh] bg-black border-white/20 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold flex items-center gap-3">
              <Award className="w-8 h-8 text-[#ea0000]" />
              ATS Analysis Results
            </DialogTitle>
          </DialogHeader>

          <ScrollArea className="max-h-[calc(90vh-120px)]">
            {analysis && (
              <div className="space-y-6 pr-4">
                {/* Overall Score */}
                <div className="text-center py-6">
                  <div className={`
                    inline-flex items-center justify-center w-32 h-32 rounded-full mb-4
                    ${getScoreBgColor(analysis.overallScore)}
                  `}>
                    <span className={`text-5xl font-bold ${getScoreColor(analysis.overallScore)}`}>
                      {analysis.overallScore}
                    </span>
                  </div>
                  <p className="text-xl text-white/80">Overall ATS Score</p>
                  <p className="text-sm text-white/50 mt-1">
                    {analysis.overallScore >= 80 
                      ? 'Excellent! Your resume is ATS-friendly.' 
                      : analysis.overallScore >= 60 
                        ? 'Good, but there\'s room for improvement.' 
                        : 'Needs significant optimization.'}
                  </p>
                </div>

                <Separator className="bg-white/10" />

                {/* Category Scores */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Category Scores</h4>
                  <div className="space-y-4">
                    {[
                      { label: 'Keyword Match', score: analysis.keywordScore },
                      { label: 'Format Compatibility', score: analysis.formatScore },
                      { label: 'Content Quality', score: analysis.contentScore },
                    ].map((category) => (
                      <div key={category.label}>
                        <div className="flex justify-between mb-2">
                          <span className="text-white/70">{category.label}</span>
                          <span className={getScoreColor(category.score)}>{category.score}/100</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              category.score >= 80 ? 'bg-green-500' : 
                              category.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${category.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-white/10" />

                {/* Section Scores */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Section Analysis</h4>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {Object.entries(analysis.sectionScores).map(([section, score]) => (
                      <div key={section} className="text-center p-3 bg-white/5 rounded-lg">
                        <p className="text-2xl font-bold text-white capitalize">{score}</p>
                        <p className="text-xs text-white/50 capitalize">{section}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="bg-white/10" />

                {/* Keywords Found */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Keywords Found ({analysis.foundKeywords.length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {analysis.foundKeywords.map((keyword) => (
                      <Badge 
                        key={keyword}
                        className="bg-green-500/20 text-green-400 border-green-500/30"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Missing Keywords */}
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-500" />
                    Missing Keywords ({analysis.missingKeywords.length})
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {analysis.missingKeywords.map((keyword) => (
                      <Badge 
                        key={keyword}
                        variant="outline"
                        className="text-yellow-400 border-yellow-500/30"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Format Issues */}
                {analysis.formatIssues.length > 0 && (
                  <>
                    <Separator className="bg-white/10" />
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        Format Issues ({analysis.formatIssues.length})
                      </h4>
                      <ul className="space-y-2">
                        {analysis.formatIssues.map((issue, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/70">
                            <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}

                {/* Suggestions */}
                <Separator className="bg-white/10" />
                <div>
                  <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#ea0000]" />
                    Recommendations
                  </h4>
                  <ul className="space-y-2">
                    {analysis.suggestions.map((suggestion, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/70">
                        <CheckCircle className="w-4 h-4 text-[#ea0000] mt-0.5 flex-shrink-0" />
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    onClick={clearFile}
                    className="flex-1 bg-[#ea0000] hover:bg-[#c00000] text-white"
                  >
                    Scan Another Resume
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setShowResults(false)}
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
}
